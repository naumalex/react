export interface SearchAnimalParams {
  page?: number;
  limit?: number;
  filter?: Partial<Animal>;
}

export interface Animal {
  uid: string;
  name: string;
  earthAnimal: boolean;
  earthInsect: boolean;
  avian: boolean;
  canine: boolean;
  feline: boolean;
}

export interface Page {
  pageNumber: number;
  pageSize: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
}

export interface AnimalsPagedQueryResponse {
  page: Page;
  animals: Animal[];
}
