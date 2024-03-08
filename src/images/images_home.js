// Home

const home_images = ['/gallery/all/11-VANITY-2.webp', '/gallery/all/12-DINING-1.webp', '/gallery/all/13-DINING-2.webp', '/gallery/all/14-KITCHEN-1.webp', '/gallery/all/2.webp', '/gallery/all/8-PATHWAY.webp', '/gallery/all/9-VANITY-1.webp', '/gallery/all/ELEVATION-10-V1-0-01.jpeg.webp', '/gallery/all/ELEVATION-10-V3.jpeg.webp', '/gallery/all/ELEVATION-10-V4.jpeg.webp', '/gallery/all/Electrical Shop-R1.webp', '/gallery/all/Electrical Shop-R2-2-1.webp', '/gallery/all/Electrical Shop-R2-2.webp', '/gallery/all/Electrical Shop-R2.webp', '/gallery/all/Elevation-V1.webp', '/gallery/all/Elevation-V2.webp', '/gallery/all/Elevation-V3.webp', '/gallery/all/FF BEDROOM-2-1.webp', '/gallery/all/FF BEDROOM-2-2.webp', '/gallery/all/FF BEDROOM-3-1.webp', '/gallery/all/FF BEDROOM-3-2.webp', '/gallery/all/GF-BEDROOM-1.webp', '/gallery/all/GF-BEDROOM-2.webp', '/gallery/all/GF-BEDROOM-3.webp', '/gallery/all/HOTEL VISHWAA - EXTERIOR -1.webp', '/gallery/all/IMG_20230913_075759_812.webp', '/gallery/all/LIVING-1.webp', '/gallery/all/LIVING-2.webp', '/gallery/all/LIVING-3.webp', '/gallery/all/Pratica-V1.webp', '/gallery/all/Pratica-V2.webp', '/gallery/all/Pratica-V3.webp', '/gallery/all/RV1-ELEVATION-6-V1.webp', '/gallery/all/RV1-ELEVATION-6-V2.webp', '/gallery/all/RV1-ELEVATION-6-V3-1.webp', '/gallery/all/RV1-ELEVATION-6-V3-2.webp', '/gallery/all/RV1-Pratica-V1.webp', '/gallery/all/RV1-Pratica-V2.webp', '/gallery/all/RV1-ROHITHA-HERITAGE-V1.webp', '/gallery/all/RV1-ROHITHA-HERITAGE-V3.webp', '/gallery/all/RV1-ROHITHA-HERITAGE-V4.webp', '/gallery/all/RV1-ROHITHA-HERITAGE-V5.webp', '/gallery/all/RV2-BRIGHT BILLBOARD-V (1).webp', '/gallery/all/RV2-BRIGHT BILLBOARD-V (2).webp', '/gallery/all/RV2-BRIGHT BILLBOARD-V (3).webp', '/gallery/all/RV2-HOTAL-V1.webp', '/gallery/all/RV2-HOTAL-V2.webp', '/gallery/all/RV2-Home Interior - 5.webp', '/gallery/all/RV2-Home Interior - 7.webp', '/gallery/all/RV2-Pratica-V1-1.webp', '/gallery/all/RV2-Pratica-V1-2.webp', '/gallery/all/RV2-Pratica-V1.webp', '/gallery/all/RV2-Pratica-V2.webp', '/gallery/all/RV2-Pratica-V3.webp', '/gallery/all/RV2-ROHITHA HERITAGE-V1.webp', '/gallery/all/RV2-ROHITHA HERITAGE-V2.webp', '/gallery/all/RV2-ROHITHA HERITAGE-V3.webp', '/gallery/all/RV3-BEDROOM-V1.webp', '/gallery/all/RV3-BEDROOM-V2.webp', '/gallery/all/RV3-BEDROOM-V3.webp', '/gallery/all/RV3-BEDROOM-V4.webp', '/gallery/all/RV3-BEDROOM-V5.webp', '/gallery/all/RV3-BEDROOM-V6.webp', '/gallery/all/RV3-HOTEL-V1.webp', '/gallery/all/RV3-HOTEL-V2.webp', '/gallery/all/RV3-MBR-V1.webp', '/gallery/all/RV3-MBR-V10.webp', '/gallery/all/RV3-MBR-V11.webp', '/gallery/all/RV3-MBR-V2.webp', '/gallery/all/RV3-MBR-V3.webp', '/gallery/all/RV3-MBR-V4.webp', '/gallery/all/RV3-MBR-V5.webp', '/gallery/all/RV3-MBR-V6.webp', '/gallery/all/RV3-MBR-V7.webp', '/gallery/all/RV3-MBR-V8.webp', '/gallery/all/RV3-MBR-V9.webp', '/gallery/all/RV4-Hotel Interior-V2.webp', '/gallery/all/RV4-Hotel Interior-V3.webp', '/gallery/all/RV4-Hotel Interior-V4.webp', '/gallery/all/RV4-Hotel Interior-V5.webp']
const home_image_name = []

// Gallery

const gallery_images = {
    all: [['/gallery/all/11-VANITY-2.webp', '/gallery/all/12-DINING-1.webp', '/gallery/all/13-DINING-2.webp'], ['/gallery/all/14-KITCHEN-1.webp', '/gallery/all/2.webp', '/gallery/all/8-PATHWAY.webp'], ['/gallery/all/9-VANITY-1.webp', '/gallery/all/ELEVATION-10-V1-0-01.jpeg.webp', '/gallery/all/ELEVATION-10-V3.jpeg.webp'], ['/gallery/all/ELEVATION-10-V4.jpeg.webp', '/gallery/all/Electrical Shop-R1.webp', '/gallery/all/Electrical Shop-R2-2-1.webp'], ['/gallery/all/Electrical Shop-R2-2.webp', '/gallery/all/Electrical Shop-R2.webp', '/gallery/all/Elevation-V1.webp'], ['/gallery/all/Elevation-V2.webp', '/gallery/all/Elevation-V3.webp', '/gallery/all/FF BEDROOM-2-1.webp'], ['/gallery/all/FF BEDROOM-2-2.webp', '/gallery/all/FF BEDROOM-3-1.webp', '/gallery/all/FF BEDROOM-3-2.webp'], ['/gallery/all/GF-BEDROOM-1.webp', '/gallery/all/GF-BEDROOM-2.webp', '/gallery/all/GF-BEDROOM-3.webp'], ['/gallery/all/HOTEL VISHWAA - EXTERIOR -1.webp', '/gallery/all/IMG_20230913_075759_812.webp', '/gallery/all/LIVING-1.webp'], ['/gallery/all/LIVING-2.webp', '/gallery/all/LIVING-3.webp', '/gallery/all/Pratica-V1.webp'], ['/gallery/all/Pratica-V2.webp', '/gallery/all/Pratica-V3.webp', '/gallery/all/RV1-ELEVATION-6-V1.webp'], ['/gallery/all/RV1-ELEVATION-6-V2.webp', '/gallery/all/RV1-ELEVATION-6-V3-1.webp', '/gallery/all/RV1-ELEVATION-6-V3-2.webp'], ['/gallery/all/RV1-Pratica-V1.webp', '/gallery/all/RV1-Pratica-V2.webp', '/gallery/all/RV1-ROHITHA-HERITAGE-V1.webp'], ['/gallery/all/RV1-ROHITHA-HERITAGE-V3.webp', '/gallery/all/RV1-ROHITHA-HERITAGE-V4.webp', '/gallery/all/RV1-ROHITHA-HERITAGE-V5.webp'], ['/gallery/all/RV2-BRIGHT BILLBOARD-V (1).webp', '/gallery/all/RV2-BRIGHT BILLBOARD-V (2).webp', '/gallery/all/RV2-BRIGHT BILLBOARD-V (3).webp'], ['/gallery/all/RV2-HOTAL-V1.webp', '/gallery/all/RV2-HOTAL-V2.webp', '/gallery/all/RV2-Home Interior - 5.webp'], ['/gallery/all/RV2-Home Interior - 7.webp', '/gallery/all/RV2-Pratica-V1-1.webp', '/gallery/all/RV2-Pratica-V1-2.webp'], ['/gallery/all/RV2-Pratica-V1.webp', '/gallery/all/RV2-Pratica-V2.webp', '/gallery/all/RV2-Pratica-V3.webp'], ['/gallery/all/RV2-ROHITHA HERITAGE-V1.webp', '/gallery/all/RV2-ROHITHA HERITAGE-V2.webp', '/gallery/all/RV2-ROHITHA HERITAGE-V3.webp'], ['/gallery/all/RV3-BEDROOM-V1.webp', '/gallery/all/RV3-BEDROOM-V2.webp', '/gallery/all/RV3-BEDROOM-V3.webp'], ['/gallery/all/RV3-BEDROOM-V4.webp', '/gallery/all/RV3-BEDROOM-V5.webp', '/gallery/all/RV3-BEDROOM-V6.webp'], ['/gallery/all/RV3-HOTEL-V1.webp', '/gallery/all/RV3-HOTEL-V2.webp', '/gallery/all/RV3-MBR-V1.webp'], ['/gallery/all/RV3-MBR-V10.webp', '/gallery/all/RV3-MBR-V11.webp', '/gallery/all/RV3-MBR-V2.webp'], ['/gallery/all/RV3-MBR-V3.webp', '/gallery/all/RV3-MBR-V4.webp', '/gallery/all/RV3-MBR-V5.webp'], ['/gallery/all/RV3-MBR-V6.webp', '/gallery/all/RV3-MBR-V7.webp', '/gallery/all/RV3-MBR-V8.webp'], ['/gallery/all/RV3-MBR-V9.webp', '/gallery/all/RV4-Hotel Interior-V2.webp', '/gallery/all/RV4-Hotel Interior-V3.webp'], ['/gallery/all/RV4-Hotel Interior-V4.webp', '/gallery/all/RV4-Hotel Interior-V5.webp']]
}


export { home_images, gallery_images, home_image_name }