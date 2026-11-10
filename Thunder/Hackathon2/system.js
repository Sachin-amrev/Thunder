import os from 'os';

export function getSystemInfo() {
  try {
    const cpus = os.cpus().map(cpu => ({
      model: cpu.model,
      speed: cpu.speed,
      times: cpu.times
    }));

    const nets = os.networkInterfaces();
    const ipAddresses = [];
    Object.keys(nets).forEach(iface => {
      nets[iface].forEach(net => {
        if (net.family === 'IPv4' && !net.internal) ipAddresses.push(net.address);
      });
    });

    return {
      system: {
        osType: os.type(),
        platform: os.platform(),
        release: os.release(),
        architecture: os.arch(),
        hostname: os.hostname(),
        uptime: `${Math.floor(os.uptime() / 3600)} hrs`,
        totalMemoryMB: (os.totalmem() / 1024 / 1024).toFixed(2),
        freeMemoryMB: (os.freemem() / 1024 / 1024).toFixed(2),
        memoryUsagePercent: ((1 - os.freemem() / os.totalmem()) * 100).toFixed(2) + '%',
      },

      node: {
        nodeVersion: process.version,
        execPath: process.execPath,
        currentDir: process.cwd(),
        processId: process.pid,
        startTime: new Date(process.uptime() * -1000 + Date.now()).toISOString(),
      },

      user: {
        username: os.userInfo().username,
        homeDir: os.homedir(),
        shell: os.userInfo().shell || 'N/A'
      },

      cpu: {
        count: os.cpus().length,
        details: cpus.slice(0, 3)  // only show few cores for brevity
      },

      network: {
        interfaces: Object.keys(nets),
        ipAddresses
      },

      environment: {
        path: process.env.PATH || 'N/A',
        lang: process.env.LANG || 'N/A',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'N/A'
      },

      timestamp: new Date().toISOString()
    };

  } catch (err) {
    return { error: `Failed to collect system info: ${err.message}` };
  }
}