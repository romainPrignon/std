const mayAsync = async <R1, R2>(success: () => Promise<R1>, failure?: (err: unknown) => R2): Promise<R1 | R2> => {
  try {
    return await success()
  } catch (err) {
    return failure ? failure(err) : err
  }
}


export {
  mayAsync
}
