export interface Action {
type: string;
payload?: any
}



export const carsActions = {
  ADD_CARS: 'ADD_CARS',
  REMOVE_CARS: 'REMOVE_CARS',
}


export interface ICar {
  id: number;
  make: string;
  model: string;
  description?: string,
  color: string,
  bodyStyle?: string
}

export interface MyAppState{
  vehicles: Array<ICar>
}