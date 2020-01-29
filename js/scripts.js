console.log('OK');

// Initialize Plyr player

const player = new Plyr( '#player', {
  
    controls : ['play', 'current-time', 'progress'],
    
    keyboard : { focused: true, global: true },
    
    seekTime : 30
  });

  console.log( player );