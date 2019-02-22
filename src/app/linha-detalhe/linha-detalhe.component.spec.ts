import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { LinhaDetalheComponent } from './linha-detalhe.component'

describe('LinhaDetalheComponent', () => {
  let component: LinhaDetalheComponent
  let fixture: ComponentFixture<LinhaDetalheComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinhaDetalheComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhaDetalheComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
