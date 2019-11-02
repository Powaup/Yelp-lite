import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer J7hMezp1JewXiQ4FuuFkGnC8Qx0P01KQUtKCC_kmKKmk6AuBXgQQ0_0-0_yPHiiRDBjvK4MELcKEWXHZXeutVObyKqvIAJNDocN9DgGXJXqT6-RlUWrh3daxdTSWXXYx'
    }
});