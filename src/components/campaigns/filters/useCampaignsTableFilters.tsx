import { useTranslation } from 'react-multi-lang';

import { ChoiceListFilter } from '@/shared/filters/ChoiceListFilter';
import { useProductsStatusChoices } from './useProductsStatusChoices';
import { DatePickerFilter } from '@/shared/filters/DatePickerFilter';

export const useCampaignsTableFilters = () => {
  const productsStatusChoices = useProductsStatusChoices();
  const t = useTranslation();

  return [
    {
      key: 'status',
      label: t('table_filters.campaign_status'),
      filter: <ChoiceListFilter fieldKey="status" choices={productsStatusChoices}/>,
    },
    {
      key: 'start_date',
      label: t('table_filters.start_date'),
      filter: <DatePickerFilter fieldKey="start_date"/>,
    },
  ];
};
