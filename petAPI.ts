import { expect } from 'chai';
import { PetApi, Pet, Category } from '@swagger/typescript-fetch-petstore'

describe('PetApi', () => {


    beforeEach(() => {
        api = new PetApi({
            basePath: 'https://petstore.swagger.io/'
        });
    });

    it('should add and delete pet', () => {
        return api.addPet(fixture, requestOptions).then(() => {

        });
    });

    it('should get pets by ID', () => {
        return api.getPetById(fixture, requestOptions).then(() => {
            return expect(result).to.deep.equal(fixture);
        });
    });

    it('should delete pet', () => {
        return api.deletePet(fixture.id, requestOptions);
    });
});


