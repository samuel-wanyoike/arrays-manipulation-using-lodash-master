
const os = require('os');

// Function to get the name of the operating system of the host machine
const getOSName = () => {
  return os.platform();
}

// Function to get the number of free memory of the system in bytes
const getFreeMemory = () => {
  return os.freemem();
}

// Function to get the information about the current user of the system
const getCurrentUser = () => {
  return os.userInfo();
}

// Function to get the information of the hostname
const getHostName = () => {
  return os.hostname();
}

// Function to get the information about the CPU
const getCPUDetails = () => {
  return os.cpus();
}

module.exports = {
  getOSName,
  getFreeMemory,
  getCurrentUser,
  getHostName,
  getCPUDetails
}