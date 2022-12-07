import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken';

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
    const {ok, ...rest} = await bdd.logIn(email, password)
    const token = jwt.sign(rest, '6811058d-7f62-481b-89bd-d43fa3861429');
    res.status(200).json({...rest, token})
  } catch (e) {
    res.status(401).json(e)
  }
}