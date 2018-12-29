# MMM-connection-status
Display internet connection status for MagicMirror<sup>2</sup>

## Dependencies
  * An installation of [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)

## Installation
 1. Clone this repo into `~/MagicMirror/modules` directory.
 2. Configure your `~/MagicMirror/config/config.js`:
 
     ```
     {
         module: 'MMM-connection-status',
         header: "Internet Connection",
         position: 'top_left', // Or any valid MagicMirror position.
         config: {
             // See 'Configuration options' for more information.
         }
     }
     ```

## Configuration Options

| **Option**         | **Default** | **Description**                     |
| ------------------ | ----------- | ----------------------------------- |
| `updateInterval`   | `60000`     | Time in ms to wait between updating |
| `initialLoadDelay` | `0`         | Time in ms to wait until start      |
| `animationSpeed`   | `250`       | Fade animation time                 |
