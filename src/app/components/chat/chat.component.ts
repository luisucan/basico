import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  texto:string;
  mensajesSub: Subscription;
  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit() {
    this.mensajesSub = this.chatService.getMessage().subscribe( msg =>{
      console.log(msg);
    });
  }
  ngOnDestroy(){
    this.mensajesSub.unsubscribe();
  }

  enviar(){
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }

}
