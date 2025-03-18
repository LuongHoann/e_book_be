import { ResponseAPI } from '../../types/http.entity';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LicenseOwnershipService } from './license-ownership.service';
import { LicenseOwnership } from './entities/license-ownership.entity';
import { CreateLicenseOwnershipInput, UpdateLicenseOwnershipInput } from './dto';


@Resolver(() => ResponseAPI<LicenseOwnership>)
export class LicenseOwnershipResolver {
  constructor(private readonly licenseOwnershipService: LicenseOwnershipService) {}

  @Mutation(() => ResponseAPI<LicenseOwnership>)
  createLicenseOwnership(@Args('createLicenseOwnershipInput') createLicenseOwnershipInput: CreateLicenseOwnershipInput) {
    return this.licenseOwnershipService.create(createLicenseOwnershipInput);
  }

  @Mutation(() => ResponseAPI<LicenseOwnership>)
  updateLicenseOwnership(@Args('updateLicenseOwnershipInput') updateLicenseOwnershipInput: UpdateLicenseOwnershipInput) {
    return this.licenseOwnershipService.update(updateLicenseOwnershipInput.id, updateLicenseOwnershipInput);
  }

  @Mutation(() => ResponseAPI<LicenseOwnership>)
  removeLicenseOwnership(@Args('id', { type: () => Int }) id: number) {
    return this.licenseOwnershipService.remove(id);
  }
}
