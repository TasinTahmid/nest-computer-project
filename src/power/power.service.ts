import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    suppplyPower(watts: number){
        console.log("Supplying power ",watts,"watts from PowerService.");
    }
}
