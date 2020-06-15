import { Component, OnInit } from '@angular/core';
import { Video } from '../videos/Video';
import { VideosService } from '../videos.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
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
