import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmprestimos } from './listar-emprestimos';

describe('ListarEmprestimos', () => {
  let component: ListarEmprestimos;
  let fixture: ComponentFixture<ListarEmprestimos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarEmprestimos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEmprestimos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
