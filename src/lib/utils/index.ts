const isDev = process.env.NODE_ENV === 'development'

const getThemeBg = (theme = true) => {
  return theme
    ? {
        backgroundColor: 'rgba(73, 82, 123, 0.3)',
        color: 'rgba(255, 255, 255, 1)',
      }
    : {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        color: 'rgba(0, 0, 0, 1)',
      }
}

function* insertionSort(arr: number[]) {
  const len = arr.length
  let preIndex: number, current
  for (let i = 1; i < len; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
    yield arr.map((a, index) => ({
      value: a,
      swap: index === preIndex + 1 || index === i,
    }))
  }
  return arr
}

const sleep = (time = 2000) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, time)
  })

export { getThemeBg, insertionSort, sleep, isDev }
