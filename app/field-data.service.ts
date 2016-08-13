import { Injectable, OnInit } from '@angular/core';
import { FieldModel } from './field.model';

@Injectable()

export class FieldDataService {

  fieldData:FieldModel[] = [

    //Train 1
    new FieldModel("t001","Engine gearbox temperature", "\xB0F", "t01", [175,210]),
    new FieldModel("s001","Diesel engine shaft speed", "RPM", "t01", [1000,1100]),
    new FieldModel("p001","Oil pressure (gauge reading)","psig","t01", [0,40]),
    new FieldModel("t001","Oil temperature","\xB0F","t01",[80,230]),
    new FieldModel("d001","Engine run time","hours","t01" ),
    new FieldModel("t002","Water jacket temperature","\xB0F","t01",[175,210]),
    new FieldModel("p002","Fuel pressure","psig","t01",[50,75]),
    new FieldModel("f001","Engine fuel inlet flowrate","usgpm","t01"),
    new FieldModel("f002","Engine fuel outlet flowrate","usgpm","t01"),
    new FieldModel("f003","Engine fuel consumption rate","usgpm","t01",[0,30]),
    new FieldModel("t003","HP Pump inboard bearing temperature","\xB0F","t01",[120,180]),
    new FieldModel("t004","HP Pump outboard bearing temperature","\xB0F","t01",[120,180]),
    new FieldModel("p003","Prefilter inlet pressure","psig","t01",[35,52]),
    new FieldModel("p004","Prefilter outlet pressure","psig","t01",[35,52]),
    new FieldModel("p005","Feed header pressure", "psig", "t01", [700,1000]),
    new FieldModel("p006","Brine header pressure","psig", "t01", [700,1000]),
    new FieldModel("p007","Membrane differential pressure", "psid", "t01", [0,50]),
    new FieldModel("f003","Permeate flowrate","usgpm","t01",[800,900]),
    new FieldModel("f004","Totalized permeate flow","usgal","t01"),
    new FieldModel("c001","Permeate conductivity", "\xB5s/cm", "t01", [0,2000]),
    new FieldModel("d002","Train run time","hours","t01"),


    //Train 2
    new FieldModel("t001","Engine gearbox temperature", "\xB0F", "t02", [175,210]),
    new FieldModel("s001","Diesel engine shaft speed", "RPM", "t02", [1000,1100]),
    new FieldModel("p001","Oil pressure (gauge reading)","psig","t02", [0,40]),
    new FieldModel("t001","Oil temperature","\xB0F","t02",[80,230]),
    new FieldModel("d001","Engine run time","hours","t02" ),
    new FieldModel("t002","Water jacket temperature","\xB0F","t02",[175,210]),
    new FieldModel("p002","Fuel pressure","psig","t02",[50,75]),
    new FieldModel("f001","Engine fuel inlet flowrate","usgpm","t02"),
    new FieldModel("f002","Engine fuel outlet flowrate","usgpm","t02"),
    new FieldModel("f003","Engine fuel consumption rate","usgpm","t02",[0,30]),
    new FieldModel("t003","HP Pump inboard bearing temperature","\xB0F","t02",[120,180]),
    new FieldModel("t004","HP Pump outboard bearing temperature","\xB0F","t02",[120,180]),
    new FieldModel("p003","Prefilter inlet pressure","psig","t02",[35,52]),
    new FieldModel("p004","Prefilter outlet pressure","psig","t02",[35,52]),
    new FieldModel("p005","Feed header pressure", "psig", "t02", [700,1000]),
    new FieldModel("p006","Brine header pressure","psig", "t02", [700,1000]),
    new FieldModel("p007","Membrane differential pressure", "psid", "t02", [0,50]),
    new FieldModel("f003","Permeate flowrate","usgpm","t02",[800,900]),
    new FieldModel("f004","Totalized permeate flow","usgal","t02"),
    new FieldModel("c001","Permeate conductivity", "\xB5s/cm", "t02", [0,2000]),
    new FieldModel("d002","Train run time","hours","t02"),

    //Train 3
    new FieldModel("t001","Engine gearbox temperature", "\xB0F", "t03", [175,210]),
    new FieldModel("s001","Diesel engine shaft speed", "RPM", "t03", [1000,1100]),
    new FieldModel("p001","Oil pressure (gauge reading)","psig","t03", [0,40]),
    new FieldModel("t001","Oil temperature","\xB0F","t03",[80,230]),
    new FieldModel("d001","Engine run time","hours","t03" ),
    new FieldModel("t002","Water jacket temperature","\xB0F","t03",[175,210]),
    new FieldModel("p002","Fuel pressure","psig","t03",[50,75]),
    new FieldModel("f001","Engine fuel inlet flowrate","usgpm","t03"),
    new FieldModel("f002","Engine fuel outlet flowrate","usgpm","t03"),
    new FieldModel("f003","Engine fuel consumption rate","usgpm","t03",[0,30]),
    new FieldModel("t003","HP Pump inboard bearing temperature","\xB0F","t03",[120,180]),
    new FieldModel("t004","HP Pump outboard bearing temperature","\xB0F","t03",[120,180]),
    new FieldModel("p003","Prefilter inlet pressure","psig","t03",[35,52]),
    new FieldModel("p004","Prefilter outlet pressure","psig","t03",[35,52]),
    new FieldModel("p005","Feed header pressure", "psig", "t03", [700,1000]),
    new FieldModel("p006","Brine header pressure","psig", "t03", [700,1000]),
    new FieldModel("p007","Membrane differential pressure", "psid", "t03", [0,50]),
    new FieldModel("f003","Permeate flowrate","usgpm","t03",[800,900]),
    new FieldModel("f004","Totalized permeate flow","usgal","t03"),
    new FieldModel("c001","Permeate conductivity", "\xB5s/cm", "t03", [0,2000]),
    new FieldModel("d002","Train run time","hours","t03")

  ]

}
