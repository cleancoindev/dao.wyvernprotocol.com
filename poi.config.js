module.exports = (options, req) => ({
  babel: {
    jsx: 'vue',
    transpileModules: ['ipfs-api', 'cids', 'multihashes', 'is-ipfs', 'ipld-dag-pb', 'multiaddr', 'multihashing-async', 'peer-id', 'libp2p-crypto', 'web3', 'asn1.js',
      'multicodec', 'ipfs-block', 'multibase', 'ipfs-unixfs', 'libp2p-crypto-secp256k1', 'peer-info', '@ethersproject', 'web3-utils']
  },
  entry: './src/index.js',
  output: {
    html: {
      title: 'Wyvern DAO',
      description: 'Decentralized autonomous organization responsible for governing the Wyvern Exchange',
      template: 'src/index.ejs'
    }
  },
  configureWebpack: {
    node: {
      fs: 'empty'
    },
    externals: [/dtrace-provider$/, /safe-json-stringify$/, /fs$/],
    module: {
      noParse: [/dtrace-provider$/, /safe-json-stringify$/]
    }
  }
})
