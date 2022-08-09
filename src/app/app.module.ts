import { NgModule } from '@angular/core'; // core module
import { BrowserModule } from '@angular/platform-browser'; // render module
import { FormsModule } from '@angular/forms'; // forms module

import { AppComponent } from './app.component'; // import app
import { ServerComponent } from './server/server.component'; // import server
import { ServersComponent } from './servers/servers.component'; // import servers

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent], // declare components
  imports: [BrowserModule, FormsModule], // import modules
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
