---
title: Lidars Sequence
---

A `LidarsSeq` input consists of a sequence lidar point clouds. For more documentation on what each field corresponds to in the `LidarsSeq` object please check the section related to [Input Overview](/docs/input-api/overview).

:::info no multi-lidar support currently
Currently there is only support for supplying a single point cloud per frame.
:::

```python reference
https://github.com/annotell/annotell-python/blob/master/annotell-input-api/examples/lidars_seq.py
```
:::tip Use dryrun to validate input
Setting `dryrun` parameter to true in the method call, will validate the input using the Input API but not create any inputs.
:::
