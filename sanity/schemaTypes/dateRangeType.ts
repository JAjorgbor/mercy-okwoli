import { defineField } from 'sanity'

export const dateRangeType = {
  name: 'dateRange',
  title: 'Date Range',
  type: 'object',
  fields: [
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'MM-YYYY', // Customize the format as needed
      },
    }),
    defineField({
      name: 'isOngoing',
      title: 'Ongoing',
      type: 'boolean',
      description: 'Is this event still ongoing?',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      hidden: ({ parent }) => parent?.isOngoing === true, // Hide endDate if "Ongoing" is checked

      options: {
        dateFormat: 'MM-YYYY', // Customize the format as needed
      },
    }),
  ],
  options: {
    validation: (rule: any) =>
      rule.custom(({ startDate, endDate, isOngoing }: any) => {
        if (!startDate) {
          return 'Start date is required'
        }
        if (!isOngoing && !endDate) {
          return 'End date is required unless the event is ongoing'
        }
        if (!isOngoing && new Date(endDate) < new Date(startDate)) {
          return 'End date cannot be earlier than start date'
        }
        return true // Validation passed
      }),
  },
}
