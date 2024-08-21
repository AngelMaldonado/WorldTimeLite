export type TimeZone = {
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
