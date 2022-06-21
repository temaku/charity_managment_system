
import axios from 'axios'

import { API_BASE_URL } from '../common'
import { authHeaderForPdf } from './auth-header'


// generate report pdf
export const generateReport = async () => {
    return  await axios.get(`${API_BASE_URL}v1/generateReport`, {
        headers: authHeaderForPdf(),
        responseType: 'arraybuffer',
    })    
}

const generateReportService = {
    generateReport
}

export default generateReportService
