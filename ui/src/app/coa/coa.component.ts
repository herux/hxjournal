import { Component, OnInit } from '@angular/core';
import { Config } from '../config/config';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'hxcoa',
  templateUrl: './coa.component.html',
  styleUrls: ['./coa.component.css']
})
export class CoaComponent implements OnInit {
  configService: ConfigService;
  config:  Config;
  constructor() { }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => {
        console.log(data);
        this.config = {
          accountDataUrl: (data as Config).accountDataUrl,
          journalDataUrl: (data as Config).journalDataUrl
        }
      });
  }

  ngOnInit(): void {
    this.showConfig();
  }

}
