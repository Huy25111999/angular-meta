export class DataAttributeAttributeDTO{
  createdAt?: string
  createdBy?: string
  dataAttTypeId?: number
  description?: string
  name?: string
  id?: number
  status?: number
  updatedAt?: string
  updatedBy?: string
  constructor(description: string, name: string) {
    this.description = description;
    this.name = name;
  }


}
