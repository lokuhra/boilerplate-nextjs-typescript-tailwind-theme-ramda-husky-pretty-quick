import axios from 'axios'
import { useEffect } from 'react'

export const api = axios.create({
    baseURL: 'http://challenges.us-east-1.elasticbeanstalk.com',
    timeout: 0,
})
