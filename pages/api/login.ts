import type { NextApiRequest, NextApiResponse } from 'next'

import bdd from './bdd'

interface Data {
  email: string;
  password: string;
}

export default async function login (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {email, password} : Data = req.body
  try {
    const login = await bdd.logIn(email, password)
    res.status(200).json(login)
  } catch (e) {
    res.status(401).json(e)
  }
}