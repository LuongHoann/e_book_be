import { ResponseAPI } from '../../types/http.entity';
import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { LicenseService } from './license.service';
import { License } from './entities/license.entity';
import { CreateLicenseInput } from './dto/create-license.input';
import { UpdateLicenseInput } from './dto/update-license.input';


@Resolver(() => License)
export class LicenseResolver {
  constructor(private readonly licenseService: LicenseService) {}

  @Mutation(() => ResponseAPI<License>)
  createLicense(@Args('createLicenseInput') createLicenseInput: CreateLicenseInput) {
    return this.licenseService.create(createLicenseInput);
  }

  @Query(() => ResponseAPI<License>, { name: 'licenses' })
  findAll() {
    return this.licenseService.findAll();
  }

  // @Query(() => ResponseAPI<License>, { name: 'license' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.licenseService.findOne(id);
  // }

  @Mutation(() => ResponseAPI<License>)
  updateLicense(@Args('updateLicenseInput') updateLicenseInput: UpdateLicenseInput) {
    return this.licenseService.update(updateLicenseInput.id, updateLicenseInput);
  }

  @Mutation(() => ResponseAPI<License>)
  removeLicense(@Args('id', { type: () => ID }) id: string) {
    return this.licenseService.remove(id);
  }
}
