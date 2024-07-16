import { configuration } from './_config';
import { DatenControllerApi, UpdateZusatzInfosDto } from './generated';

const client = new DatenControllerApi(configuration);

export const uploadData = async (file: File) => {
  return await client.uploadData({ file });
};

export const getAllData = async (
  kostenstelle?: string,
  orga?: string,
  page?: number,
  pageSize?: number
) => {
  return await client.getData({
    page,
    pageSize,
    kostenstelle,
    organisationseinheit: orga,
  });
};

export const getZusatzInfosForDatensatz = async (id: number) => {
  return await client.getZusatzInfosForDatensatz({ id });
};

export const updateZusatzinfos = async (
  id: number,
  updateZusatzInfosDto: UpdateZusatzInfosDto
) => {
  return await client.updateZusatzinfos({ id, updateZusatzInfosDto });
};

export const donwloadData = async (kostenstelle?: string) => {
  return await client.downloadData({ kostenstelle });
};
