import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerService: PowerService){}

    getData(){
        console.log("calling supplyPower from DiskService...");
        this.powerService.suppplyPower(20);

        return 'data';
    }
}
