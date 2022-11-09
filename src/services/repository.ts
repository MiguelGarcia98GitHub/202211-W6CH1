export interface Repository<ICharacter> {
    getAll: () => Promise<Array<ICharacter>>;
    get?: (id: number) => Promise<ICharacter>;
    create: (item: Partial<ICharacter>) => Promise<ICharacter>;
    update: (item: Partial<ICharacter>) => Promise<ICharacter>;
    delete: (item: ICharacter) => Promise<void>;
}
