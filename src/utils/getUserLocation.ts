export const getUserLocation = (): Promise<{ lat: number; lon: number }> => {
    
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      },
    );
  });
};
