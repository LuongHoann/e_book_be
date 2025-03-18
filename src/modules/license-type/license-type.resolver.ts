import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LicenseTypeService } from './license-type.service';
import { LicenseType } from './entities/license-type.entity';
import { CreateLicenseTypeInput } from './dto/create-license-type.input';
import { UpdateLicenseTypeInput } from './dto/update-license-type.input';
import { ResponseAPI } from '@/types/http.entity';

@Resolver(() => ResponseAPI<LicenseType>)
export class LicenseTypeResolver {
  constructor(private readonly licenseTypeService: LicenseTypeService) {}

  @Mutation(() => ResponseAPI<LicenseType>)
  createLicenseType(@Args('createLicenseTypeInput') createLicenseTypeInput: CreateLicenseTypeInput) {
    return this.licenseTypeService.create(createLicenseTypeInput);
  }

  @Query(() => ResponseAPI<LicenseType>, { name: 'licenseTypes' })
  findAll() {
    return this.licenseTypeService.findAll();
  }

  @Mutation(() => ResponseAPI<LicenseType>)
  updateLicenseType(@Args('updateLicenseTypeInput') updateLicenseTypeInput: UpdateLicenseTypeInput) {
    return this.licenseTypeService.update(updateLicenseTypeInput.id, updateLicenseTypeInput);
  }

  @Mutation(() => ResponseAPI<LicenseType>)
  removeLicenseType(@Args('id', { type: () => Int }) id: string) {
    return this.licenseTypeService.remove(id);
  }
}
