import { version } from 'antd';

const parseVersion = (version?: string) => {
  const versionRegex = /(\d+)|([a-zA-Z]+)/g;
  const parts = version?.match(versionRegex);
  return parts?.map(part => /^\d+$/.test(part) ? Number(part) : part) || [];
};

/**
 * Check if the version of antd is greater than 4.23.0
 */
export const isModernModal = () => {
  const parts = parseVersion(version);
  const major = parts[0];
  const minor = parts[1];
  if (typeof major === 'number' && major > 4) {
    return true;
  }
  if (major === 4) {
    return typeof minor === 'number' && minor >= 23;
  }
  return false;
};
