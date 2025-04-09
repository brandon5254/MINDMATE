import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FlaskService } from '../../service/flask.service';
import { Diagnosis } from 'src/app/models/diagnosis';

import {MatTable} from '@angular/material/table';
import { TestsService } from 'src/app/service/tests.service';
import { Test } from 'src/app/models/test';
import { AppModule } from 'src/app/app.module';
import { DiagnosisService } from 'src/app/service/diagnosis.service';
import { DepartmentService } from 'src/app/service/department.service';
import { DiagnosisInformation } from 'src/app/models/diagnosisInformation';
import { AppComponent } from 'src/app/app.component';

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

export interface SymptomOption {
  symptom: string;
  value: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  myControl = new FormControl();
  role = localStorage.getItem('role');
  options: string[] = ["alucinaciones","ideas_delirantes","control_pensamiento","obsesiones_presencia","desorganización del pensamiento","lenguaje desorganizado","catatonía","paranoia intensa","comportamiento motor desorganizado","dificultades en teoría de la mente","eco del pensamiento","comportamiento social inadecuado","hipoexpresividad emocional","expresion_facial_reducida","gesticulacion_reducida","contacto_visual_bajo","afectividad_inapropiada","alogia","alogia_pobreza_habla","alogia_pobreza_contenido","alogia_bloqueos_pensamiento","abulia","abulia_higiene","abulia_trabajo_estudio","anergia_fisica","anhedonia","anhedonia_sociabilidad","anhedonia_intereses_recreativos","anhedonia_intereses_sexuales","anhedonia_relaciones_amigos","anhedonia_relaciones_familia","memoria_deterioro","atencion_deterioro","procesamiento_info_deficit","tristeza","sentimiento_de_culpa","cambios_en_el_apetito","sueño_o_fatiga","disminucion_del_libido","dificultad_de_concetracion","ideas_suicidas","preocupacion","nerviosismo","pensamientos_intrusivos","taquicardia","sudoracion","temblores","disnea","hipervigilancia","irritabilidad",];
  years: number[] = Array(71).fill(1).map((_, idx) => 2021 - idx)
  filteredOptions!: Observable<string[]>;
  selectedSymptoms: string[] = [];
  
  diagnosisDescription!: string;
  selectedGender = "";
  selectedYear = "";
  testLimit: boolean = false;
  limitedTestNumber = 3;
  selectedSymptomsIndex: Array<number> = new Array<number>(132).fill(0);

  displayedColumns: string[] = ['name'];
  possibleDiagnosis: Diagnosis[] = [];
  possibleDiagnosisInformation: DiagnosisInformation[] = [new DiagnosisInformation("","","",[])];
  selectedDiagnosisIndex: number = 0;

  showLoaderResult: boolean = false;
  
  @ViewChild(MatTable) table!: MatTable<Diagnosis>;
  @ViewChild('symptomInput') symptomInput!: ElementRef<HTMLInputElement>;

  constructor( 
    public _service: FlaskService, 
    public _serviceDepartment: DepartmentService,
    public _serviceTests: TestsService,
    public _diagnosisService: DiagnosisService,
    public _formBuilder: FormBuilder,
    public myapp: AppComponent) 
  {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(null),
      map((symptom: string | null) => (symptom ? this._filter(symptom) : this.options.slice())),
    );
  }
  
  async ngOnInit(): Promise<void> {
    //function for if user have already a pending test
    await this._serviceTests.getPendingTestsByPatientId(localStorage.getItem("id")!).get().forEach(data=> {
      if (data.size < this.limitedTestNumber){
        this.testLimit = false;
      }
      else{
        this.testLimit = true;
      } 
    });
    if (this.role == 'deshabilitada'){
      this.myapp.openSnackBar("Esta cuenta está deshabilitada.", "Continuar", "mat-primary");
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
  selected(event: MatAutocompleteSelectedEvent): void {

    if(this.selectedSymptoms.indexOf(event.option.viewValue) !== -1) {
      console.log('Already exist');
      this.myControl.setValue(null); 
    }
    else {
      this.selectedSymptoms.push(event.option.viewValue);
      this.selectedSymptomsIndex[this.options.indexOf(event.option.value)] = 1;
  
      // loginleyince matoptionların sayıları değişiyor, selectedSymptomsIndex bozuluyor
      //this.selectedSymptomsIndex[Number(event.option.id.slice(11))-2] = 1;
      
      this.symptomInput.nativeElement.value = '';
      this.myControl.setValue(null);      
    }    
  }

  remove(symptom: string): void {
    const index = this.selectedSymptoms.indexOf(symptom);
    
    const finder = (element: any) => element == symptom;

    var result = this.options.findIndex(finder);

    this.selectedSymptomsIndex[result] = 0;


    if (index >= 0) {
      this.selectedSymptoms.splice(index, 1);
    }
  }

  getResult(){
    this.showLoaderResult = true;
    let diagnosis: Diagnosis[] = [];
   
    // let subscribeData = this._service.getResult(this.selectedSymptomsIndex).subscribe( data => {
    //   console.log(data);
    // })
    
    this._service.getResult(this.selectedSymptomsIndex).subscribe(
      data => { 
        for ( let i = 0; i < Object.values(data).length; i++){
          diagnosis.push( new Diagnosis(Object.values(data)[i][0], Object.values(data)[i][1]))
        }
        this.possibleDiagnosis = diagnosis;
        
        this.possibleDiagnosisInformation = [];
        for ( let i = 0; i < diagnosis.length; i++){
          this.possibleDiagnosisInformation.push(this._diagnosisService.getDiagnosisInformation(diagnosis[i].name));
        }

        this.showLoaderResult = false;
      }
    );
    this.table.renderRows();
    this.selectedDiagnosisIndex = 0;

  }

  recordTest(){
    if(localStorage.getItem('role') == "patient"){
      let dep = this._diagnosisService.getDiagnosisInformation(this.possibleDiagnosis[0].name)?.department as string;
      let newTest = new Test(localStorage.getItem('id')!, "", "", Date.now(), this.selectedSymptoms.toString(), this.diagnosisListToString(this.possibleDiagnosis), "", dep)
      this._serviceTests.create(newTest);
    }
    this.myapp.openSnackBar("¡La prueba ha sido creada! Visita la página de historial de pruebas.","Continuar",'mat-primary')
  }

  diagnosisListToString(list: Diagnosis[]){
    let result = "";
    for(let i = 0; i< list.length; i++){
      if(i != list.length-1){
        result += list[i].name + ", " + list[i].probability + "&";
      }
      else{
        result += list[i].name + ", " + list[i].probability;
      }
    }
    return result;
  }
  
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}

}
