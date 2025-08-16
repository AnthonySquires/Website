FROM debian:bookworm-slim

ARG TASK_VERSION=3.44.1

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    git \
    python3 \
    python3-pip \
    wget \
    zstd \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN wget -qO- https://github.com/go-task/task/releases/download/v${TASK_VERSION}/task_linux_amd64.tar.gz | tar -C /usr/local/bin -xzf - task \
    && chmod +x /usr/local/bin/task

RUN --mount=type=bind,target=/requirements.txt,source=requirements.txt \
    pip3 install --no-cache-dir --break-system-packages -r /requirements.txt

ENV PLAYWRIGHT_BROWSERS_PATH=/opt/playwright
RUN playwright install --with-deps chromium firefox webkit \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

CMD ["/bin/bash"]
