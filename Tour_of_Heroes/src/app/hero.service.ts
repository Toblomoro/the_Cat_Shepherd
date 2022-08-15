import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Component, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes() : Hero[] {
    return HEROES;
  }
}

