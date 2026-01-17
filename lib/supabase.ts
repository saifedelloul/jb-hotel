import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xioqilvkzxqzbstsuuxd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpb3FpbHZrenhxemJzdHN1dXhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2NDExMDgsImV4cCI6MjA4NDIxNzEwOH0.A2AQz01dKu50YtPXmltuLtRwObQfnqPUFl_5kk2RHkM';

export const supabase = createClient(supabaseUrl, supabaseKey);