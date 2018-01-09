package(default_visibility = ["//visibility:public"])

load("@org_tensorflow_tensorboard//tensorboard/defs:web.bzl", "ts_web_library")
load("@org_tensorflow_tensorboard//tensorboard/defs:vulcanize.bzl", "tensorboard_html_binary")

licenses(["notice"])  # Apache 2.0

ts_web_library(
    name = "test",
    testonly = True,
    srcs = [
        "test.html",
        "test.ts",
    ],
    path = "/etymo_example",
    deps = [
        "//facets_dive/components/facets_dive",
        "//facets_dive/lib/test:externs",
        "@org_tensorflow_tensorboard//tensorboard/components/tf_imports:d3",
        ":dataset1"
    ],
)

ts_web_library(
    name = "dataset1",
    srcs = [
        "dataset1.html",
        "dataset1.ts",
    ],
    path = "/etymo_example",
)

tensorboard_html_binary(
    name = "etymo_example",
    testonly = True,
    input_path = "/etymo_example/test.html",
    output_path = "/etymo_example/test.html",
    deps = [":test",":dataset1"],
)
