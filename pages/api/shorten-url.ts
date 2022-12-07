import type { NextApiRequest, NextApiResponse } from 'next'

import bdd from './bdd'

interface Data {
  url: string;
}

export default async function registration (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const domain : string = req.rawHeaders.at(19) || 'http://localhost:3000'
  const {url} : Data = req.body
  try {
    const timestamp = Date.now()
    res.status(200).json({urlShorten: `${domain}/${timestamp}`})
  } catch (e) {
    res.status(401).json(e)
  }
}