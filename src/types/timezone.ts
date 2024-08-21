export type TimeZone = {
  hour_string: string;
  hour_24: number;
  week_day_name: string;
  month_name: string;
  date: string;
  utc_offset: string;
  timezone: string;
  day_of_week: number;
  day_of_year: number;
  datetime: Date;
  utc_datetime: Date;
  unixtime: number;
  raw_offset: number;
  week_number: number;
  dst: boolean;
  abbreviation: string;
  dst_offset: number;
  dst_from: null;
  dst_until: null;
  client_ip: string;
}
