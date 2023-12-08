
import axios from 'axios'
export async function getOptions(data?: any) {
  return Promise.resolve([
    { label: "Option 1", value: "value1" },
    { label: "Option 2", value: "value2" },
    { label: "Option 3", value: "value3" },
    { label: "Option 2", value: "value4" },
    { label: "Option 3", value: "value5" }
  ]);
}
