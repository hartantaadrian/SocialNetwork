import { Component, OnInit } from '@angular/core';
import { Video } from './Video';
import { VideosService } from '../videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: Video[];

  constructor(
    private videosService: VideosService
  ) { }

  getVideos(): void {
    this.videosService.getVideos().subscribe(result => {
      console.log(result)
      this.videos = result.slice(0,5)
    }
    );
  }
  ngOnInit(): void {
    this.getVideos();
  }

}
