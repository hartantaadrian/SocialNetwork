import { Component, OnInit } from '@angular/core';
import { Video } from '../videos/Video';
import { VideosService } from '../videos.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  videos: Video[];
  constructor(
    private videosService: VideosService
  ) { }

  getVideos(): void {
    this.videosService.getVideos().subscribe(result => {
      console.log(result)
      this.videos = result
    }
    );
  }
  ngOnInit(): void {
    this.getVideos();
  }

}
