const may = <R1, R2>(success: () => R1, failure?: (err: unknown) => R2): R1 | R2 => {
  try {
    return success()
  } catch (err) {
    return failure ? failure(err) : err
  }
}


export {
  may
}
