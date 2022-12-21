import type { NextApiRequest, NextApiResponse } from 'next'

import bdd from './bdd'

interface Data {
  email: string;
  password: string;
  meta: {pseudo: string}
}

export default async function registration (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {email, password, meta} : Data = req.body
  try {
    const login = await bdd.signUp(email, password, {metadata: meta})
    res.status(200).json(login)
  } catch (e) {
    res.status(401).json(e)
  }
}