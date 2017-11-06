# MMM-MMM-internet-connection
Display internet connection status for MagicMirror<sup>2</sup>

## Dependencies
  * An installation of [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror)

## Installation
 1. Clone this repo into `~/MagicMirror/modules` directory.
 2. Configure your `~/MagicMirror/config/config.js`:
 
     ```
     {
         module: 'MMM-internet-connection',
         header: "Internet Connection",
         position: 'top_left', // Or any valid MagicMirror position.
         config: {
             // See 'Configuration options' for more information.
         }
     }
     ```

## Configuration Options
| **Option** | **Default** | **Description** |
| --- | --- | --- |
| `updateInterval` | `600000` | Time in ms to wait between updating |
