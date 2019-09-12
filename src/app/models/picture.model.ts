export class Picture {
  private readonly id: number;
  private readonly name: string;
  private readonly imageUrl: string;

  constructor(id: number, imageUrl: string) {
    this.id = id;
    this.imageUrl = imageUrl;
  }

  public getId(): number {
    return this.id;
  }

  public getImageUrl(): string {
    return this.imageUrl;
  }
}
