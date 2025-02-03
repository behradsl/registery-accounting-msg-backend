import { Module } from '@nestjs/common';

import { RegistryController } from './registry.controller';
import { RegistryService } from './registry.service';
import { OrmProvider } from 'src/providers/orm.provider';
import { LaboratoryModule } from 'src/laboratory/laboratory.module';
import { ImportRegistryService } from './import-registry.service';
import { RegistryExportService } from './registry-export.service';


@Module({
  imports:[LaboratoryModule],
  providers: [RegistryService ,OrmProvider, ImportRegistryService, RegistryExportService],
  controllers: [RegistryController]
})
export class RegistryModule {}
