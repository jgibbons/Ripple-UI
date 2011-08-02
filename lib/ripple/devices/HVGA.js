/*
 *  Copyright 2011 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = {
    "group": "Generic Devices",

    "id": "HVGA",
    "name": "Generic - HVGA (320x480)",
    "osName": "Generic",
    "osVersion": "Generic",
    "manufacturer": "Generic",
    "model": "Generic",
    "uuid": "42",
    "firmware": "Generic",

    "screen": {
        "width": 320,
        "height": 480
    },
    "viewPort": {
        "portrait": {
            "width": 320,
            "height": 480,
            "paddingTop": 0,
            "paddingLeft": 0
        },
        "landscape": {
            "width": 480,
            "height": 320,
            "paddingTop": 0,
            "paddingLeft": 0
        }
    },

    "browser": ["Generic"],
    "ppi": 96,
    "platforms": ["web", "wac", "opera", "vodafone", "phonegap"],
    "userAgent": "Mozilla/5.0 (X11; U; Linux x86_64; en-US) AppleWebKit/533.2 (KHTML, like Gecko) Chrome/5.0.342.7 Safari/533.2"
};